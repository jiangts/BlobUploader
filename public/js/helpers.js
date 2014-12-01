function getBase64Image(img) {
  // Create an empty canvas element
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  // Copy the image contents to the canvas
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  // Get the data-URL formatted image
  // Firefox supports PNG and JPEG. You could check img.src to
  // guess the original format, but be aware the using "image/jpg"
  // will re-encode the image.
  var dataURL = canvas.toDataURL("image/jpeg");

  return dataURL.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
};

/* JK this is not supported by any browser but firefox
function getBlobImage(img, cb) {
  // Create an empty canvas element
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  // Copy the image contents to the canvas
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  // 3rd parameter is the quality. See https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement.toBlob
  canvas.toBlob(cb, "image/jpeg", 1);
};
*/

// SUPER HELPFUL: http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
}

// alternate implementation on same stackoverflow post
function base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0 ; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
}

// this doesn't crash, but I don't think it works...
function u16toBlob(u16Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 1024;
    var bytesLength = u16Data.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0 ; offset < end; ++i, ++offset) {
            bytes[i] = u16Data[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint16Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
}
