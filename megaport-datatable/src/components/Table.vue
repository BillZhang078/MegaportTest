<template>
    <div>
        <div class="actions">
            <input v-model="searchKeyword" placeholder="Search..." @input="searchGoods()">
            <button @click="showPopup=true">Add</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th v-if="desc" @click="sort('id')">ID &uarr;</th>
                    <th v-if="!desc" @click="sort('id')">ID &darr;</th>
                    <th v-if="desc" @click="sort('type')">Type &uarr;</th>
                    <th v-if="!desc" @click="sort('type')">Type &darr;</th>
                    <th v-if="desc" @click="sort('name')">Name &uarr;</th>
                    <th v-if="!desc" @click="sort('name')">Name &darr;</th>
                    <th v-if="desc" @click="sort('topping')">Topping &uarr;</th>
                    <th v-if="!desc" @click="sort('topping')">Topping &darr;</th>
                </tr>
            </thead>
            <tbody class="content">
                <tr v-for="(item, index) in filteredData" :key="index">
                    <td class="ID">{{ item.id }}</td>
                    <td>{{ item.type}}</td>
                    <td>{{ item.name}}</td>
                    <td>{{ item.topping}}</td>
                </tr>
            </tbody>
        </table>
        <Form v-if="showPopup" @add="addItem" @close="closePopup">
        </Form>
    </div>
</template>

<script>
import tableData from '../data';
import Form from './Form.vue';
export default {
    components: {
        Form
    },
    props:[ 

    ],
    data()  {
        return {
            data: tableData,
            filteredData: tableData,
            searchKeyword: "",
            showPopup: false,
            desc: true
        }
    },
    computed: {

    },
    methods: {
        searchGoods() {
            this.filteredData = this.data.filter(item => {
                for (const key in item) {
                    if(item[key].toLowerCase().includes(this.searchKeyword)) {
                        return item;
                    }   
                }               
            })
        },
        addItem(item) {
            this.filteredData.unshift(item);
            this.showPopup = false;
        },
        closePopup() {
            this.showPopup = false;
        },

        sort(field) {
            this.desc = !this.desc;
            if(this.desc) {
                this.filteredData.sort((a,b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0));
            } else {
                this.filteredData.sort((a,b) => (a[field] > b[field]) ? -1 : ((b[field] > a[field]) ? 1 : 0));
            }
        }
    }
}
</script>

<style>
    .actions {
        display: flex;
        justify-content: space-between;
        align-content: space-around;
        width: 80%;
        margin: 30px auto;
        padding: 5px;
    }
    .actions input {
        display: block;
        width: 30%;
        padding: 10px;
        outline: none;
        border: 3px solid #f4f6fb;
        border-radius: 8px;
    }

     .actions button {
        display: block;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        font-weight: 900;
        width: 8%;
        padding: 10px;
        outline: none;
        border: none;
        border-radius: 15px;
        background-color: black;
        color: #ffffff;
        cursor: pointer;
    }

    .table {
        margin: auto;
        border-collapse: collapse;
        box-shadow: 0 5px 10px #e1e5ee;
        background-color: white;
        text-align: left;
        overflow: hidden;
        width: 80%;
    }

    .table thead {
        box-shadow: 0 5px 10px #e1e5ee;
    }

    .table th{
        padding: 1rem 2rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        font-size: 1rem;
        font-weight: 900;
        width: 25%;
        cursor: pointer;
    }

    .table tr:nth-child(even) {
       background-color: #f4f6fb;
    }

    .table td {
        padding: 1rem 2rem;
    }

    .table .ID {
        color: #2962ff;
    }
</style>
