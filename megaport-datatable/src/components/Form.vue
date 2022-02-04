<template>
    <div class="form-popup">
            <div>
                <h2>Add a Baked Good</h2>
                <p v-if="errors.length">
                    <ul>
                        <li v-for="(error,index) in errors" :key=index>{{ error }}</li>
                    </ul>
                </p>
            </div>
            <form class="form" @submit="checkForm">
                <div class="form-element">
                    <label>ID</label>
                    <input v-model="newItem.id" type="text" name="id" required>
                </div>
                <div class="form-element">
                    <label>Type</label>
                    <input v-model="newItem.type" type="text" name="type" required>
                </div>
                <div class="form-element">
                    <label>Name</label>
                    <input v-model="newItem.name"  type="text" name="name" required>
                </div>
                <div class="form-element">
                    <label>Topping</label>
                    <input v-model="newItem.topping" type="text" name="topping" required>
                </div>
                <div class="form-action">
                    <button type="submit" @click="addItem">
                        Add
                    </button>
                    <button @click="closePopup">
                        Close
                    </button>
                    
                </div>
        </form>
    </div>
</template>

<script>
export default {
    components: {

    },
    props:[ 

    ],
    data()  {
        return {
            newItem: {},
            errors: []
        }
    },
    computed: {

    },
    methods: {

        checkForm(e) {
            console.log(this.newItem);
            if(this.newItem.name && this.newItem.id && this.newItem.type && this.newItem.topping) {
                return true;
            }
            this.errors = [];
            if(!this.newItem.name) {
                this.errors.push('Name required');
            }
            if(!this.newItem.id) {
                this.errors.push('ID required');
            }
            if(!this.newItem.type) {
                this.errors.push('Type required');
            }
            if(!this.newItem.topping) {
                this.errors.push('Topping required');
            }
            e.preventDefault();
        },

        addItem(e) {
            this.checkForm(e);

            if(!this.errors.length) {
                this.$emit('add',this.newItem);
                this.newItem = {};
            }
            
        },
        closePopup() {
            this.$emit('close');
        }
    }

}
</script>

<style>
    .form-popup {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 380px;
        padding: 20px 30px;
        background: #fff;
        box-shadow: 0 5px 10px #e1e5ee;
        border-radius: 10px;
    }

    .form-popup p {
        color: red;
        font-weight: 500;
    }

    .form-popup .form-action button {
        width: 100%;
        height: 40px;
        border: none;
        outline: none;
        font-size: 15px;
        font-weight: 500;
        background: #222;
        box-shadow: 0 5px 10px #e1e5ee;
        color: #f5f5f5;
        margin-top: 10px;
        border-radius: 10px;
        cursor: pointer;
    }

    .form-popup h2 {
        text-align: center;
        color: #222;
        margin: 10px 0px 20px;
        font-size: 25px;       
    }

    .form-popup .form .form-element {
        margin-top: 10px;
    }

    .form-popup .form .form-element label {
        font-size: 18px;
        color: #222;
    }

    .form-popup .form .form-element input {
        margin-top: 5px;
        display: block;
        width: 100%;
        padding: 10px;
        outline: none;
        border: 1px solid #aaa;
        border-radius: 5px;
    }
</style>
