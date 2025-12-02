"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    #_articleId;
    #_name;
    #_quantity;
    #_price;
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        //TODO Implement this method
        this.#articleId = articleId;
        this.#name = name;
        this.quantity = quantity;
        this.price = price;
    }

    get articleId() {
        return this.#_articleId;
    }

    get name() {
        return this.#_name;
    }

    get quantity() {
        return this.#_quantity;
    }

    set quantity(value) {
        this.#_quantity = this.#validateQuantity(value);
    }

    get price() {
        return this.#_price;
    }

    set price(value) {
        this.#_price = value;
    }

    get total() {
        return this.#_quantity * this.#_price;
    }
    //endregion public methods

    //region private methods
    set #articleId(value) {
        this.#_articleId = this.#validateArticleId(value);
    }

    set #name(value) {
        this.#_name = value;
    }

    #validateArticleId(articleId) {
        if (!Number.isInteger(articleId) || articleId <= 0) {
            throw new InvalidArticleIdException();
        }
        return articleId;
    }

    #validateQuantity(quantity) {
        if (!Number.isInteger(quantity) || quantity < 1) {
            throw new InvalidQuantityException();
        }
        return quantity;
    }

    #validatePrice(price) {
        //TODO Implement this method
    }
    //endregion private methods
}



