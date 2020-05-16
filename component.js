Vue.component('pro',{
  props:{
    teacher:{
        type: Boolean,
        required: true,
        default: false
        }},
  template: `
    <div>
        <p> user is teacher {{ teacher }} </p>
        <section class="products">
            <div class="product-card">
                <div class="product-image">
                    <h3> {{ item }} </h3>
                    <img :src="photo">
                </div>
                <div class="product-info">
                    <h5>{{ name }}</h5>
                    <h6>{{price}}</h6>
                </div>
                <div>
                    <button :click="Addtocart"> add to cart </button>
                </div>
            </div>
        </section>
    </div>
    `,
    data(){
        return {    img1:'pro1.jpg',
                    photo: 'pro1.jpg',
                    item: 't-shirt',
                    name: 'black t-shirt'
        }},

    methods:{
    Addtocart(){
        this.$emit('updatecart')
        }
    },

    computed: {
    price (){
        if (this.teacher){
            return "Free"
        }
        return "99 rub"
        }
    }})

var app = new Vue({
    el: '#prod',
    data: {
        privet:'hi,wazzup ?',
        user:true,
        user1:false,
        cart:0
        },
    methods: {
        Updatecart(){
        this.cart += 1
        }
    }
})




