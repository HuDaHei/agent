<template>
  <div class="iframe_container">
    <div class="iframe_box" ref="iframeBox">
      <div class="iframe_menu">
        <div ref="menu" class="menu_drag">
          拖动div
        </div>
        <div class="menu_item">
          <span>最小化</span>
          <span>最大化</span>
          <span>关闭</span>
        </div>
      </div>
      <div class="iframe_section">
        <div class="mark" ref="iframeMark"></div>
        <iframe
          src="http://192.168.0.176:8080/#/assetsData/survey"
          frameborder="0"
          style="height:100%;width:100%"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "iframeBox",
  data() {
    return {
      showMark: false
    };
  },
  mounted() {
    this.drag();
  },
  methods: {
    drag() {
      const dv = this.$refs["menu"];
      const iframeBoxDOm = this.$refs["iframeBox"];
      const iframeMark = this.$refs['iframeMark'];
      //获取元素
      let x = 0;
      let y = 0;
      let l = 0;
      let t = 0;
      let isDown = false;
      //鼠标按下事件
      dv.onmousedown = function(e) {
        //获取x坐标和y坐标
        x = e.clientX;
        y = e.clientY;

        //获取左部和顶部的偏移量
        l = iframeBoxDOm.offsetLeft;
        t = iframeBoxDOm.offsetTop;
        //开关打开
        isDown = true;
        iframeMark.classList.remove('no_mark')
        //设置样式
        dv.style.cursor = "move";
      };
      //鼠标移动
      window.onmousemove = function(e) {
        if (isDown == false) {
          return;
        }
        //获取x和y
        let nx = e.clientX;
        let ny = e.clientY;
        //计算移动后的左偏移量和顶部的偏移量
        let nl = nx - (x - l);
        let nt = ny - (y - t);

        iframeBoxDOm.style.left = nl + "px";
        iframeBoxDOm.style.top = nt + "px";
      };
      //鼠标抬起事件
      window.onmouseup = function() {
        //开关关闭
        console.log("鼠标松开");
        isDown = false;
        this.showMark = false;
        dv.style.cursor = "default";
        iframeMark.classList.add('no_mark')
      };
      dv.onmouseleave = function() {
        //   isDown = false;
        //   dv.style.cursor = "default";
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.iframe_container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.5);
  z-index: 99;
  overflow: hidden;
}
.iframe_box {
  position: absolute;
  width: 60%;
  height: 60%;
  background-color: #fff;
  border: 1px solid goldenrod;
}
.iframe_section {
  height: 90%;
  width: 100%;
  position: relative;
  .mark {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    background-color: transparent;
  }
  .no_mark{
      display: none;
  }
}
.iframe_menu {
  display: flex;
  background-color: hotpink;
  .menu_drag {
    flex: 1;
  }
  .menu_item {
    border: 1px solid red;
  }
}
</style>
