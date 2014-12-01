BlobUploader
============

Uploads binary resources to node.js server without using the &lt;input> tag.

This project is intended to be a workaround to Phonegap's `file-transfer` plugin, which can only send one file at a time.
To get around this, it would be nice if we could use `XHR2` to upload multipart form data. However, the built-in way to do this uses the &lt;input> tag, and we can't remotely add a user's files to an HTML input.

The trick is that we can get their base64 encodings using the File API (See [FileReader](http://docs.phonegap.com/en/2.3.0/cordova_file_file.md.html#FileReader_read_as_data_url)). This project converts the base64 encoding into a blob and uploads it to a node.js server. As a result, we can enjoy some extra perks of `XHR2` (like upload progress and [chunked uploads](http://www.html5rocks.com/en/tutorials/file/xhr2/#toc-examples). There's even a lib called [Resumeable.js](http://www.resumablejs.com/) that may work as well).

I also found a client and server-side js library called [lz-string](http://pieroxy.net/blog/pages/lz-string/index.html) for base64 string compression into a UTF-16 string that generally achieves 66% compression. That's hella good. However, it isn't implemented yet. Feel free to contribute!
