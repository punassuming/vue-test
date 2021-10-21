<template>
<div class="iframe-container">
    <iframe src="test.html" frameborder="0"> </iframe>
</div>
</template>

<style scoped>

.iframe-container {
  overflow: hidden;
  /* 16:9 aspect ratio */
  padding-top: 56.25%;
  position: relative;
}

.iframe-container iframe {
   border: 0;
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
}
</style>