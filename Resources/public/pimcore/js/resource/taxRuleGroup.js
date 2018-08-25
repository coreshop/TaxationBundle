Ext.define('CoreShop.store.TaxRuleGroup', {
    extend: 'CoreShop.resource.ComboBox',
    alias: 'widget.coreshop.taxRuleGroup',

    name: 'taxRule',
    storeId: 'coreshop_taxrulegroups',
    fieldLabel: t('coreshop_tax_rule_group'),
    listeners: {
        beforerender: function () {
            if (!this.getStore().isLoaded() && !this.getStore().isLoading())
                this.getStore().load();
        }
    },

    initComponent: function () {
        this.store = pimcore.globalmanager.get('coreshop_tax_rule_group');

        this.callParent();
    }
});