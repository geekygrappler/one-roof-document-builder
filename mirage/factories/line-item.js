import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    itemName() { return faker.commerce.productName(); },
    quantity: 1
});
