<template>
 <div id="submitForm">
    <p>Type Something..</p> 
        <i>Press enter</i>
        <br/>
        <form v-on:submit.prevent>
            <input v-on:keypress="submit" type="text" v-model="text" /> 
        </form>
</div>
</template>
<script>
export default {
  name: "Form",
  data: function() {
    return {
        text: ""
    };
  },
   watch: {
    name: function(newName) {
      // eslint-disable-next-line
      console.log("watch    ", newName);
      this.text = newName;
    }
  },
  props: {
    name: {
      type: String,
      require: true
    },
    editIndex: {
      type: Number,
      require: true
    }
  },
  methods: {
    submit: function(e) {
      // eslint-disable-next-line
      console.log(this.editIndex);
      // eslint-disable-next-line
      console.log(this.text);
      if (e.keyCode === 13) {
           if (this.editIndex !== -1) {
          // eslint-disable-next-line
          console.log("edit item");
          this.$emit("edit-item", {
            name: this.text,
            editIndex: this.editIndex
          });
        } else {
          this.$emit("submit-item", this.text);
        }
        this.text = "";
      }
    }
  }
};
</script>
<style>
</style>