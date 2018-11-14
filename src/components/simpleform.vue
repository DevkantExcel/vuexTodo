<template>
    <form id="app" @submit.prevent>
        <p v-show="errors.length" class="textLeft">
            <b style="color:red;">Please correct the following errors(s):</b>
            <ul>
                <li v-for="(error, index) in errors"  v-bind:key="index"> {{ error }} </li>
            </ul>
        </p>
        <span>Name:</span> <input type="text" v-model="name" autofocus> <br />
        <span>Email:</span> <input type="email" v-model="email"> <br />
        <span>Dob:</span> <input type="date" v-model="dob"> <br />
        <span>Password:</span> <input type="password" v-model="password"> <br />
        <span>Confirm Password:</span> <input type="password" v-model="confirmPassword"> <br />
        <input type="checkbox" v-model="checked"> I Accept all terms & conditions <br />
        <input type="submit" v-on:click="checkForm">

        <table v-if="arrForm.length" class="users">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Dob <button v-on:click="sortArray"><div class="triangle-up"></div></button> </th>
            </tr>
            <tr v-for="(peeps, index) in paginatedData" v-bind:key="index">
                <td> {{peeps.Name}} </td>
                <td> {{peeps.Email}} </td>
                <td>
                    {{peeps.dob}}
                    <button v-on:click="delItem(index)"><i class="fa fa-trash"></i></button>
                    <button v-on:click="editItem(peeps, index)" class="edit"><i class="material-icons" style="font-size:19px">mode_edit</i></button>
                </td>
            </tr>
        </table>
       <div v-show="arrForm.length" >
            <button @click="nextPage" :disabled="pageNumber >= pageCount" ><i class="material-icons">chevron_right</i></button>
            Page Number:{{ pageNumber }} / {{ pageCount }}
            <button @click="prevPage" :disabled="pageNumber==0" ><i class="material-icons">chevron_left</i></button>
       </div>
    </form>   
</template>

<script>
// import Paginate from 'vuejs-paginate'
// Vue.component('paginate', Paginate)
// Vue.component('paginate', VuejsPaginate)
import Vue from "vue";
// import func from './vue-temp/vue-editor-bridge';
    export default{        
    // el: "#app",
    name: 'simpleform',
    data: function(){
        return {
            arrForm: [],
            errors: [],
            name: null,
            email: null,
            dob: null,
            password: null,
            confirmPassword: null,
            checked: false,
            isActive: true,
            editIndex: false,
            pageNumber: 0,
            id: 0,
        }
    },
    methods: {
        checkForm: function(e) {
        if (this.editIndex !== false) {
            Vue.set(this.arrForm, this.editIndex, {
                Name: this.name,
                Email: this.email,
                dob: this.dob
            });
            this.name = null;
            this.email = null;
            this.dob = null;
            this.password = null;
            this.confirmPassword = null;
            this.checked = false;
            this.editIndex = false;
        } else {
            this.errors = [];
            if (!this.name) {
                this.errors.push("Name Required");
            }
            if (!this.email) {
                this.errors.push("Email Required");
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Valid email required.');
            }
            if (!this.dob) {
                this.errors.push("Dob Required");
            }
            if (!this.password) {
                this.errors.push("Password Required");
            }
            if (!this.confirmPassword) {
                this.errors.push("Confirm Password Required");
            } else if (!this.matchPassword(this.password)) {
                this.errors.push("Password & Confirm password MUST be same");
            }
            if (!this.checked) {
                this.errors.push("please accept terms and conditions");
            }
            e.preventDefault();
            if (
                this.checked &&
                this.password == this.confirmPassword &&
                this.confirmPassword != null &&
                (this.dob != "" && this.dob != null) &&
                !this.errors.length
            ) {
            // return true
            // var peopleData = 'Name: '+this.name +', Email: '+ this.email +', Dob: '+ this.dob;
            this.arrForm.push({
                id: this.id,
                Name: this.name,
                Email: this.email,
                dob: this.dob
            });
            this.name = null;
            this.email = null;
            this.dob = null;
            this.password = null;
            this.confirmPassword = null;
            this.checked = false;
            this.id++;
            } //first if ends here
        }
        },
        validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        matchPassword: function(passWord) {
            if (passWord == this.confirmPassword) return true;
        },
        delItem: function(index) {
            this.$delete(this.arrForm, index);
        },
        editItem: function(peeps, index) {
            // console.log(index, peeps.Name, peeps.Email, peeps.dob);
            this.editIndex = peeps.id;
            this.name = peeps.Name;
            this.email = peeps.Email;
            this.dob = peeps.dob;
        },
        sortArray: function() {
            function compare(a, b) {
                if (a.dob < b.dob) {
                    return -1;
                }
                if (a.dob > b.dob) {
                    return 1;
                }
                return 0;
            }
            return this.arrForm.sort(compare);
        },
        nextPage(){
            this.pageNumber++;
        },
        prevPage(){
            this.pageNumber--;
        },
    },
    props:{
        size:{
            type:Number,
            required:false,
            default: 2
        }
    },
    computed: {
        pageCount(){
            let l = this.arrForm.length,
                s = this.size;
        return Math.floor(l/s);
        },
        paginatedData(){
            var start = this.pageNumber * this.size,
            end = start + this.size;
        return this.arrForm.slice(start, end);
        },
    }
};
</script>
<style>
    form {
        width: 50%;
        height: auto;
        margin: 10% auto;
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
    }
    form span {
        display: inline-block;
        width: 160px;
    }
    .textLeft, ul li {
        text-align: left;
    }
    ul li {
        list-style-type: disc;
    }
    .ulBorder li {
        border: 1px solid #8db640;
        position: relative;
        width: 800px;
    }
    .ulBorder li button {
        right: 0;
        position: absolute;
    }
    table,
    td,
    tr {
        border: 1px solid black;
    }
    button {
        float: right;
        margin: 0 0 0 5px;
        background: none;
        border: none;
    }
    .edit {
        margin: 0 0 0 0;
    }
    input[type=text], 
    input[type=email], 
    input[type=date],
    input[type=password] {
        width: 50%;
        padding: 5px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    input[type=submit] {
        width: 75%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    /* table css */

    .users {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
        table-layout: fixed;
        word-wrap: break-word;
    }

    .users td, .users th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    .users tr:nth-child(even){background-color: #f2f2f2;}

    .users tr:hover {background-color: #ddd;}

    .users th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #4CAF50;
        color: white;
    }
    .triangle-up {
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 20px solid #555;
        background: none;
    }
    .pagination {
        /* padding: 0 14%; */
        width: 74%;
        /* border: 1px solid; */
        margin: 0 auto;
    }
    .pagination ul {
        /* margin: 0 auto; */
    }
    .pagination li{
        list-style: none;
        float: left;
        /* margin: 0 auto; */
    }
    .pagination li a {
        /* float: left; */
        /* width: 25px; */
        display: block;
        width: 50px;
        text-align: center;
    }
    .pagination li a:hover:not(.active) {background-color:#4CAF50;}
    .page-item {
        
    }
    
</style>