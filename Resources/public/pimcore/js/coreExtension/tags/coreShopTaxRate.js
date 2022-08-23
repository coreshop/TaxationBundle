/*
 * CoreShop.
 *
 * This source file is subject to the GNU General Public License version 3 (GPLv3)
 * For the full copyright and license information, please view the LICENSE.md and gpl-3.0.txt
 * files that are distributed with this source code.
 *
 * @copyright  Copyright (c) CoreShop GmbH (https://www.coreshop.org)
 * @license    https://www.coreshop.org/license     GPLv3 and CCL
 *
 */

pimcore.registerNS('pimcore.object.tags.coreShopTaxRate');
pimcore.object.tags.coreShopTaxRate = Class.create(coreshop.object.tags.select, {

    type: 'coreShopTaxRate',
    storeName: 'coreshop_tax_rates'
});
