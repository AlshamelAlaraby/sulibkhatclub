<template>
    <div class="row justify-content-between align-items-center mb-2">
        <h4 class="header-title">
            {{ page_title && page_title.url == $route.fullPath ? ($i18n.locale == 'ar' ? page_title.title : page_title.title_e)  :(title ?? $t(`${page}`)) }}
        </h4>
        <div v-if="isSearch" class="col-xs-10 col-md-9 col-lg-7" style="font-weight: 500">
            <div class="d-inline-block" style="width: 22.2%">
                <!-- Basic dropdown -->
                <b-dropdown
                    variant="primary"
                    :text="$t('general.searchSetting')"
                    ref="dropdown"
                    class="btn-block setting-search"
                >
                    <template v-for="(filter, index) in filterSetting">
                        <b-form-checkbox
                            v-if="isVisible(filter.isV) && filter.isFilter"
                            v-model="fields"
                            :value="filter.isV"
                            @change="$emit('searchFun',fields)"
                            class="mb-1"
                        >
                            {{ getCompanyKey(filter.trans) }}
                        </b-form-checkbox>
                    </template>
                </b-dropdown>
                <!-- Basic dropdown -->
            </div>

            <div
                class="d-inline-block position-relative"
                style="width: 77%"
            >
                  <span
                      :class="[
                      'search-custom position-absolute',
                      $i18n.locale == 'ar' ? 'search-custom-ar' : '',
                    ]"
                  >
                    <i class="fe-search"></i>
                  </span>
                <input
                    class="form-control"
                    style="display: block; width: 93%; padding-top: 3px"
                    type="text"
                    v-model.trim="search"
                    :placeholder="`${$t('general.Search')}...`"
                />
            </div>
        </div>
    </div>
</template>

<script>
import transMixinComp from "../../helper/mixin/translation-comp-mixin";
import page_title from "../../helper/PageTitle"

export default {
    name: "searchPage",
    props: ['page','filterSetting','isVisible','companyKeys','defaultsKeys','isSearch','title'],
    mixins: [transMixinComp],
    data(){
        return {
            search: '',
            debounce: {},
            page_title: {},
            fields: []
        }
    },
    watch: {
        search(after, befour) {
            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                this.$emit('editSearch',this.search);
                this.$emit('dataSearch');
            }, 400);
        },
        pageTitle: {
            handler(newV, old) {
                this.page_title = page_title.value;
            },
        },
    },
    computed: {
        pageTitle: function () {
            return page_title.value;
        },
    },
    mounted(){
        this.fields = this.filterSetting
        .filter(field => field.isFilter)
        .map(field => field.isV );
        this.page_title = page_title.value
    }
}
</script>

<style scoped>

</style>
