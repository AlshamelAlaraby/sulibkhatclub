<template>
   <div>
       <!--  create   -->
       <b-modal
           id="category-create"
           :title="getCompanyKey('category_create_form')"
           title-class="font-18"
           body-class="p-4 "
           :hide-footer="true"
           @show="resetModal"
           @hidden="resetModalHidden"
       >
           <form>
               <div class="mb-3 d-flex justify-content-end">
                   <b-button
                       variant="success"
                       :disabled="!is_disabled"
                       @click.prevent="resetForm"
                       type="button"
                       :class="['font-weight-bold px-2', is_disabled ? 'mx-2' : '']"
                   >
                       {{ $t("general.AddNewRecord") }}
                   </b-button>
                   <template v-if="!is_disabled">
                       <b-button
                           variant="success"
                           type="button"
                           class="mx-1"
                           v-if="!isLoader"
                           @click.prevent="AddSubmit"
                       >
                           {{ $t("general.Add") }}
                       </b-button>

                       <b-button variant="success" class="mx-1" disabled v-else>
                           <b-spinner small></b-spinner>
                           <span class="sr-only">{{ $t("login.Loading") }}...</span>
                       </b-button>
                   </template>
                   <!-- Emulate built in modal footer ok and cancel button actions -->

                   <b-button
                       variant="danger"
                       type="button"
                       @click.prevent="resetModalHidden"
                   >
                       {{ $t("general.Cancel") }}
                   </b-button>
               </div>
               <div class="row">
                   <div class="col-md-12" v-if="isVisible('name')">
                       <div class="form-group">
                           <label for="field-1" class="control-label">
                               {{ getCompanyKey('category_name_ar') }}
                               <span v-if="isRequired('name')" class="text-danger">*</span>
                           </label>
                           <div dir="rtl">
                               <input
                                   type="text"
                                   class="form-control arabicInput"
                                   @keyup="arabicValueName(create.name)"
                                   v-model="$v.create.name.$model"
                                   :class="{
                            'is-invalid': $v.create.name.$error || errors.name,
                            'is-valid': !$v.create.name.$invalid && !errors.name,
                          }"
                                   id="field-1"
                               />
                           </div>
                           <div v-if="!$v.create.name.minLength" class="invalid-feedback">
                               {{ $t("general.Itmustbeatleast") }}
                               {{ $v.create.name.$params.minLength.min }}
                               {{ $t("general.letters") }}
                           </div>
                           <div v-if="!$v.create.name.maxLength" class="invalid-feedback">
                               {{ $t("general.Itmustbeatmost") }}
                               {{ $v.create.name.$params.maxLength.max }}
                               {{ $t("general.letters") }}
                           </div>
                           <template v-if="errors.name">
                               <ErrorMessage
                                   v-for="(errorMessage, index) in errors.name"
                                   :key="index"
                               >{{ errorMessage }}</ErrorMessage
                               >
                           </template>
                       </div>
                   </div>
                   <div class="col-md-12" v-if="isVisible('name_e')">
                       <div class="form-group">
                           <label for="field-2" class="control-label">
                               {{ getCompanyKey('category_name_en') }}
                               <span v-if="isRequired('name_e')" class="text-danger">*</span>
                           </label>
                           <div dir="ltr">
                               <input
                                   type="text"
                                   class="form-control englishInput"
                                   data-create="2"
                                   @keyup="englishValueName(create.name_e)"
                                   v-model="$v.create.name_e.$model"
                                   :class="{
                            'is-invalid': $v.create.name_e.$error || errors.name_e,
                            'is-valid': !$v.create.name_e.$invalid && !errors.name_e,
                          }"
                                   id="field-2"
                               />
                           </div>
                           <div v-if="!$v.create.name_e.minLength" class="invalid-feedback">
                               {{ $t("general.Itmustbeatleast") }}
                               {{ $v.create.name_e.$params.minLength.min }}
                               {{ $t("general.letters") }}
                           </div>
                           <div v-if="!$v.create.name_e.maxLength" class="invalid-feedback">
                               {{ $t("general.Itmustbeatmost") }}
                               {{ $v.create.name_e.$params.maxLength.max }}
                               {{ $t("general.letters") }}
                           </div>
                           <template v-if="errors.name_e">
                               <ErrorMessage
                                   v-for="(errorMessage, index) in errors.name_e"
                                   :key="index"
                               >{{ errorMessage }}</ErrorMessage
                               >
                           </template>
                       </div>
                   </div>
               </div>
           </form>
       </b-modal>
       <!--  /create   -->
   </div>
</template>

<script>
import Switches from "vue-switches";
import ErrorMessage from "../widgets/errorMessage";
import loader from "../loader";
import {maxLength, minLength, requiredIf} from "vuelidate/lib/validators";
import adminApi from "../../api/adminAxios";
import Swal from "sweetalert2";
import {arabicValue, englishValue} from "../../helper/langTransform";
import transMixinComp from "../../helper/translation-comp-mixin";

export default {
    name: "category",
    components: {
        Switches,
        ErrorMessage,
        loader,
    },
    mixins: [transMixinComp],
    props: {
        companyKeys:{
            default:[]
        },
        defaultsKeys:{
            default:[]
        },
    },
    data() {
        return {
            fields: [],
            isLoader: false,
            company_id:null,
            create: {
                name: "",
                name_e: "",
            },
            errors: {},
            is_disabled: false,
        };
    },
    validations: {
        create: {
            name: { required: requiredIf(function (model) {
                    return this.isRequired("name");
                }), minLength: minLength(2), maxLength: maxLength(100) },
            name_e: { required: requiredIf(function (model) {
                    return this.isRequired("name_e");
                }), minLength: minLength(2), maxLength: maxLength(100) },
        },
    },
    mounted() {
        this.company_id = this.$store.getters["auth/company_id"];
        this.getCustomTableFields();
    },
    methods: {
        getCustomTableFields() {
            adminApi
                .get(`/customTable/table-columns/general_categories`)
                .then((res) => {
                    this.fields = res.data;
                })
                .catch((err) => {
                    Swal.fire({
                        icon: "error",
                        title: `${this.$t("general.Error")}`,
                        text: `${this.$t("general.Thereisanerrorinthesystem")}`,
                    });
                })
                .finally(() => {
                    this.isLoader = false;
                });
        },
        isVisible(fieldName) {
            let res = this.fields.filter((field) => {
                return field.column_name == fieldName;
            });
            return res.length > 0 && res[0].is_visible == 1 ? true : false;
        },
        isRequired(fieldName) {
            let res = this.fields.filter((field) => {
                return field.column_name == fieldName;
            });
            return res.length > 0 && res[0].is_required == 1 ? true : false;
        },
        /**
         *  reset Modal (create)
         */
        resetModalHidden() {
            this.create = {
                name: "",
                name_e: "",
            };
            this.$nextTick(() => {
                this.$v.$reset();
            });
            this.errors = {};
            this.is_disabled = false;
            this.$bvModal.hide(`category-create`);
        },
        /**
         *  hidden Modal (create)
         */
        resetModal() {
            this.create = {
                name: "",
                name_e: "",
            };
            this.$nextTick(() => {
                this.$v.$reset();
            });
            this.errors = {};
        },
        /**
         *  create countrie
         */
        resetForm() {
            this.create = {
                name: "",
                name_e: "",
            };
            this.$nextTick(() => {
                this.$v.$reset();
            });
            this.is_disabled = false;
            this.errors = {};
        },

        AddSubmit() {
            if (!this.create.name) {
                this.create.name = this.create.name_e;
            }
            if (!this.create.name_e) {
                this.create.name_e = this.create.name;
            }
            this.$v.create.$touch();

            if (this.$v.create.$invalid) {
                return;
            } else {
                this.isLoader = true;
                this.errors = {};
                adminApi
                    .post(`/categories`, {...this.create,company_id:this.company_id})
                    .then((res) => {
                        this.is_disabled = true;
                        this.$emit('created');
                        setTimeout(() => {
                            Swal.fire({
                                icon: "success",
                                text: `${this.$t("general.Addedsuccessfully")}`,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }, 500);
                    })
                    .catch((err) => {
                        if (err.response.data) {
                            this.errors = err.response.data.errors;
                        } else {
                            Swal.fire({
                                icon: "error",
                                title: `${this.$t("general.Error")}`,
                                text: `${this.$t("general.Thereisanerrorinthesystem")}`,
                            });
                        }
                    })
                    .finally(() => {
                        this.isLoader = false;
                    });
            }
        },
        arabicValueName(txt){
            this.create.name = arabicValue(txt);
            this.edit.name = arabicValue(txt);
        },
        englishValueName(txt){
            this.create.name_e = englishValue(txt);
            this.edit.name_e = englishValue(txt);
        }
    }
}
</script>

<style scoped>

</style>
