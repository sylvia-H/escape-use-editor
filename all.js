var myToolbar = [
  ['bold', 'italic', 'underline', 'strike'],         // 粗體、斜體、底線和刪節線
  ['blockquote', 'code-block', 'formula'],                      // 區塊、程式區塊
  // [{ 'header': 1 }, { 'header': 2 }],                // 標題1、標題2
  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }, { 'header': [1, 2, 3, 4, 5, 6, false] }],   // 字體 & 標題
  [{ 'direction': 'rtl' }, { 'align': [] }],         // 文字方向
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],      // 清單
  [{ 'script': 'sub' }, { 'script': 'super' }],      // 上標、下標
  [{ 'indent': '-1' }, { 'indent': '+1' }],          // 縮排
  ['clean'],                                        // 清除文字格式 
  ['link', 'image'],
];

// 圖片以連結形式上傳
// function imageHandler() {
//   var range = this.quill.getSelection();
//   var value = prompt('please copy paste the image url here.');
//   if (value) {
//     this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
//   }
// }

// 圖片以檔案形式上傳
// https://www.npmjs.com/package/quill-image-uploader
Quill.register("modules/imageUploader", ImageUploader);

var quill = new Quill('#description', {
  theme: 'snow',
  modules: {
    imageResize: {
      displaySize: true
    },
    toolbar: {
      container: myToolbar,
      // handlers: {
      //   image: imageHandler
      // }
    },
    imageUploader: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(
              "./img/photo.webp"
            );
          }, 300);
        });
      },
    },
  },
});
