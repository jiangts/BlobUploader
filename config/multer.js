module.exports = {
  dest: './public/uploads/',
  rename: function (fieldname, filename) {
    return fieldname;
  }
};
/* file object structure:
 * { fieldname: 'webmasterfile',
 *   originalname: 'blob',
 *   name: '0e084e4e706f71f258abf0527f6c20d4',
 *   encoding: '7bit',
 *   mimetype: 'text/xml',
 *   path: 'public/uploads/0e084e4e706f71f258abf0527f6c20d4',
 *   extension: '',
 *   size: 0,
 *   truncated: null,
 *   buffer: null }
 */
