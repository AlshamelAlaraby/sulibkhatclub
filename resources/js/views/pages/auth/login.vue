<script>
import Auth from "../../layouts/auth";

import { required, email } from "vuelidate/lib/validators";
import adminApi from "../../../api/adminAxios";
import Swal from "sweetalert2";

/**
 * Login component
 */
export default {
    page: {
        title: "Login",
        meta: [{ name: "description", content: "login" }],
    },
    data() {
        return {
            email: "",
            password: "",
            submitted: false,
            isSuccess: false,
            isError: false,
            type: "password",
            login_as: "admin"
        };
    },
    components: {
        Auth,
    },
    computed: {},
    created() {
    },
    validations: {
        email: {
            required,
            email,
        },
        password: {
            required,
        },
    },
    methods: {
        // Try to log the user in with the username
        // and password they provided.
        tryToLogIn() {
            // stop here if form is invalid
            this.$v.$touch();

            if (this.$v.$invalid) {
                return;
            } else {
                this.submitted = true;
                this.isError = false;
                const { email, password } = this;
                if (this.login_as == "admin") {
                    axios
                        .post(`${process.env.MIX_APP_URL_OUTSIDE}api/partners/login`, {
                            email,
                            password,
                        })
                        .then(async (res) => {
                            let l = res.data.data;
                            this.$store.commit("auth/editToken", l.token);
                            this.$store.commit("auth/editPartner", l.partner);
                            this.$store.commit("auth/editCompanies", l.partner.companies);
                            this.$store.commit("auth/editType", "admin");
                            this.isSuccess = true;

                            if (l.partner.companies.length > 1 && l.partner.companies) {
                                this.$router.push({ name: "company" });
                            } else if (l.partner.companies.length == 1) {
                                this.$store.commit("auth/editCompanyId", l.partner.companies[0].id);
                                await this.companyId(l.partner.companies[0].id);
                                this.$router.push({ name: "home" });
                            } else {
                                this.submitted = false;
                            }
                        })
                        .catch((err) => {
                            this.isError = true;
                        })
                        .finally(() => {
                            this.submitted = false;
                        });
                } else {
                    adminApi.post(`/users/login`, {
                        email,
                        password,
                    })
                        .then(async (res) => {
                            let l = res.data.data;
                            this.$store.commit("auth/editToken", l.token);
                            this.$store.commit("auth/editUser", l.user);
                            this.$store.commit("auth/editType", "user");
                            this.isSuccess = true;
                            await this.workflowUser(l.user.roles);
                            this.$router.push({ name: "home" });
                        })
                        .catch((err) => {
                            this.isError = true;
                        })
                        .finally(() => {
                            this.submitted = false;
                        });

                }

            }
        },
        async companyId(id) {
            await axios
                .get(
                    `${process.env.MIX_APP_URL_OUTSIDE}api/everything_about_the_company/${id}`
                )
                .then((res) => {
                    let l = res.data.data;
                    let name = [];
                    l.work_flow_trees.forEach((parent) => {
                        name.push(parent.name_e);
                        if (parent.child) {
                            parent.child.forEach((child1) => {
                                name.push(child1.name_e);
                                if (child1.child) {
                                    child1.child.forEach((child2) => {
                                        name.push(child2.name_e);
                                        if (child2.child) {
                                            child2.child.forEach((child3) => {
                                                name.push(child3.name_e);
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                    this.$store.commit('auth/editWorkFlowTrees', ['dictionary', "home", 'company', ...name]);
                    if (l.document_company_module.length > 0) {
                        let documents = [];
                        l.document_company_module.forEach(e => {
                            if (e.document_types.length > 0) {
                                e.document_types.forEach(w => {
                                    documents.push({
                                        id: w.id,
                                        name: w.name,
                                        name_e: w.name_e,
                                        is_admin: w.is_admin,
                                        is_default: 0,
                                        company_id: id,
                                        document_relateds: w.document_relateds.map(el => el.id)
                                    });
                                });
                            }
                        });
                        if (documents.length > 0) {
                            documents.forEach(e => e.is_admin = 1);
                            adminApi
                                .post(`/document/from_admin`, { documents })
                                .then((res) => { })
                                .catch((err) => {
                                    Swal.fire({
                                        icon: "error",
                                        title: `${this.$t("general.Error")}`,
                                        text: `${this.$t("general.Thereisanerrorinthesystem")}`,
                                    });
                                })
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: "error",
                        title: `${this.$t("general.Error")}`,
                        text: `${this.$t("general.Thereisanerrorinthesystem")}`,
                    });
                });
        },
        async workflowUser(roles) {
            let workflowTree = [];
            await roles.forEach((role_work_flow) => {
                if (role_work_flow.work_flow.length > 0) {
                    role_work_flow.work_flow.forEach((flow_name) => {
                        workflowTree.push(flow_name.workflow_name);
                    });
                }
            });
            this.$store.commit('auth/editWorkFlowTrees', ["home", ...workflowTree]);

        }
    },
};
</script>

<template>
    <Auth>
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-5">
                <div class="card">
                    <div class="card-body p-4">
                        <div class="text-center w-75 m-auto">
                            <div class="auth-logo">
                                <router-link to="/" class="logo logo-dark text-center">
                                    <span class="logo-lg">
                                        <img src="/images/shamel-logo-006.png" alt height="20" />
                                    </span>
                                </router-link>
                                <router-link to="/" class="logo logo-light text-center">
                                    <span class="logo-lg">
                                        <img src="/images/shamel-logo-006.png" alt height="20" />
                                    </span>
                                </router-link>
                            </div>
                            <p class="text-muted mb-4 mt-3">
                                {{ $t("login.Enteryouremailaddressandpasswordtoaccessadminpanel") }}
                            </p>
                        </div>

                        <form action="#" @submit.prevent="tryToLogIn">
                            <b-alert variant="success" class="mt-3 text-center" v-if="isSuccess" :show="5" dismissible>{{
                                $t("login.success") }}
                            </b-alert>

                            <b-alert variant="danger" class="mt-3 text-center" v-if="isError" :show="5" dismissible>{{
                                $t("login.danger") }}
                            </b-alert>
                            <div class="form-group mb-3">
                                <label for="emailaddress">{{ $t("login.Emailaddress") }}</label>
                                <input class="form-control" v-model="email" type="email" id="emailaddress"
                                    :placeholder="$t('login.Enteryouremail')" :class="{ 'is-invalid': $v.email.$error }" />
                                <div v-if="$v.email.$error" class="invalid-feedback">
                                    <span v-if="!$v.email.required">{{
                                        $t("general.fieldIsRequired")
                                    }}</span>
                                    <span v-if="!$v.email.email">{{
                                        $t("general.PleaseEnterValidEmail")
                                    }}</span>
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="password">{{ $t("login.Password") }}</label>
                                <div class="input-group input-group-merge">
                                    <input v-model="password" :type="type" id="password" class="form-control"
                                        :placeholder="$t('login.Enteryourpassword')"
                                        :class="{ 'is-invalid': $v.password.$error }" />

                                    <div class="input-group-append" data-password="false" @click="
                                        type == 'password' && password
                                            ? (type = 'text')
                                            : (type = 'password')
                                    ">
                                        <div :class="['input-group-text', type == 'text' ? 'show' : '']">
                                            <span :class="['password-eye', type == 'text' ? 'show' : '']"></span>
                                        </div>
                                    </div>

                                    <div v-if="!$v.password.required" class="invalid-feedback">
                                        {{ $t("general.fieldIsRequired") }}
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label>
                                    {{ $t("general.loginAs") }}
                                </label>
                                <select class="custom-select mr-sm-2" data-create="4" v-model="login_as">
                                    <option value="admin">{{ $t("general.Admin") }}</option>
                                    <option value="employee">{{ $t("general.Employee") }}</option>
                                </select>
                            </div>
                            <!-- <div class="form-group mb-3">
                                              <div class="custom-control custom-checkbox">
                                                <input
                                                  type="checkbox"
                                                  class="custom-control-input"
                                                  id="checkbox-signin"
                                                  checked
                                                />
                                                <label class="custom-control-label" for="checkbox-signin">{{
                                                  $t("login.Rememberme")
                                                }}</label>
                                              </div>
                                            </div> -->

                            <div class="form-group mb-0 text-center">
                                <button class="btn btn-primary btn-block" type="submit" v-if="!submitted">
                                    {{ $t("login.loginIn") }}
                                </button>
                                <b-button class="btn btn-primary btn-block" disabled v-else>
                                    <b-spinner small></b-spinner>
                                    <span class="sr-only">{{ $t("login.Loading") }}...</span>
                                </b-button>
                            </div>
                        </form>
                    </div>
                    <!-- end card-body -->
                </div>
                <!-- end card -->

                <!-- end row -->
            </div>
            <!-- end col -->
        </div>
        <!-- end row -->
    </Auth>
</template>

<style>
.input-group-text {
    cursor: pointer;
}

.input-group-text.show {
    background-color: #3bafda;
}

.input-group-text .password-eye.show {
    color: #fff;
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::after {
    background-color: #3bafda;
}

.logo-lg img {
    width: 70px;
    height: 45px;
}
</style>




