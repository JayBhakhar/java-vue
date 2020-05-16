Vue.component('product',{
    props:{
        premium:{
            type: Boolean,
            required:true
        }
    },
    template:`
        <div class="product">
            <div class="product-image">
                <img :src="image" />
            </div>
        <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else> out of Stock</p>
            <p> shipping: {{ shipping }} </p>
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <div class="color-box"
                 v-for=" (variant, index) in variants"
                 :key="variant.variantId"
                 :style="{ backgroundColor: variant.variantColor }"
                 @mouseover="updateProduct(index)">
            </div>
            <div>
                <button
                    v-on:click="addToCart"
                    :disabled="!inStock"
                    :class= "{ disabledButton: !inStock }"
                    >
                Add to cart
                </button>
                <div class="cart">
                    <p>Cart({{ cart }})</p>
                </div>
            </div>
        </div>
    </div>`,
    data() {
        return{
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            variants: [
                {   variantId: 2234,
                    variantColor: 'green',
                    variantImage: 'vmSocks-green.jpg',
                    variantQuantity: 10
                },
                {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: 'vmSocks-blue.jpg',
                variantQuanty: 0
                }],
                cart: 0
                }
            },
    methods: {
                addToCart() {
                    this.cart += 1 },
                updateProduct(index) {
                    this.selectedVariant = index}
            },
    computed: {
                title() {
                    return this.brand + + this.product },
                image(){
                    return this.variants[this.selectedVariant].variantImage},
                inStock(){
                    return this.variants[this.selectedVariant].variantQuantity},
                shipping(){
                    if(this.premium) {
                        return "Free"
                    }
                    else{
                        return 7000
                    }}
            }})

var app = new Vue({
    el: '#app',
    data:{
        premium: true
    }
    })