<template>
    <div class="zxxq">
        <p class="zxxqtu">
            <img
                :src="arr.thumb_img"
                alt=""
                class="zxxqtu1"
            >
        </p>
        <b>{{arr.title}}</b>
        <p>{{arr.click_rate}}预览</p>
        <p class="xqxqquan">{{arr.description}}</p>
        <p v-html="arr.content"></p>
    </div>
</template>
<script>
import qin from "@/http/service.js";
export default {
  data() {
    return {
      id: 0,
      arr: [],
    };
  },
  created() {
    this.shijian();
  },
  methods: {
    async shijian() {
      var res = await qin.post(
        "/information/detail?information_id=" + this.$route.params.id
      );
      console.log(res);
      this.arr = res.data.data;
    }
  },
 
};
</script>
<style>
.zxxq {
  width: 100vw;
}
.zxxqtu {
  width: 100vw;
  height: 200px;
}
.zxxqtu1 {
  width: 100%;
  height: 100%;
}
.xqxqquan{
    width: 20vw;
    height: 50px;
    margin: auto;
    border-bottom: 1px solid #999;
    text-align: center
}
</style>

