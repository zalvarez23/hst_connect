'use strict';
// Angular Factory File
angular.module('app.factories', [])

  .factory('utilFactory', [
    function() {
      // private property
      var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";



      // ----------------------------------
      // RETURN PUBLIC METHODS
      // ----------------------------------
      return {

        // public method for encoding
        base64_encode : base64_encode,

        // public method for decoding
        base64_decode : base64_decode,

        encodePostBody : encodePostBody,

        // Format message list
        formatMessages: formatMessages,

        // sort by created date
        sortByCreatedDate : sortByCreatedDate
      };



      // ----------------------------------
      // HELPER FUNCTIONS
      // ----------------------------------

      /**
       *
       * @param input
       * @returns {string}
       */
      function base64_decode(input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while ( i<input.length ) {
          enc1 = _keyStr.indexOf(input.charAt(i++));
          enc2 = _keyStr.indexOf(input.charAt(i++));
          enc3 = _keyStr.indexOf(input.charAt(i++));
          enc4 = _keyStr.indexOf(input.charAt(i++));

          chr1 = (enc1 << 2) | (enc2 >> 4);
          chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
          chr3 = ((enc3 & 3) << 6) | enc4;

          output = output + String.fromCharCode(chr1);

          if ( enc3 != 64 ) {
            output = output + String.fromCharCode(chr2);
          }
          if ( enc4 != 64 ) {
            output = output + String.fromCharCode(chr3);
          }
        }
        output = _utf8_decode(output);
        return output;
      }

      /**
       *
       * @param input
       * @returns {string}
       */
      function base64_encode(input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = _utf8_encode(input);

        while ( i<input.length ) {

          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);

          enc1 = chr1 >> 2;
          enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
          enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
          enc4 = chr3 & 63;

          if ( isNaN(chr2) ) {
            enc3 = enc4 = 64;
          }
          else if ( isNaN(chr3) ) {
            enc4 = 64;
          }

          output = output +
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);

        }

        return output;
      }

      /**
       * @name encodePostBody
       *
       * @description
       *    Encode the post body parameters
       *
       * @param  {object} key-value pair to be encoded as POST body
       * @return {String}  Encoded string
       */
      function encodePostBody(data) {
        if ( typeof data == "string" ) {
          return data;
        }
        else if ( typeof data != "object" ) {
          return data;
        }

        var str = [];
        for ( var d in data )
          str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[ d ]));
        return str.join("&");
      }

      /**
       * Format message list (from local storage) to display Unread then Read messages
       * as well as sorting them by date
       *
       * @param {Object} scope - Current scope
       * @param {Array} messages - The array of messages to sort
       */
      function formatMessages(scope, messages) {
        console.warn( '------- factories.js -> formatMessages()' );

        // STORE RAW MESSAGES FOR MANIPULATION
        var messageListRaw = messages || [];
        console.log('$scope.messageList pre-formatted:', scope.messageList);

        // SEPARATE MESSAGES INTO READ AND UNREAD
        var tmpReadArr = [];
        var tmpUnreadArr = [];
        messageListRaw.forEach(function(elem, index, arr) {
          if ( elem.IsRead ) {
            //console.log('read:', index);
            tmpReadArr[ tmpReadArr.length ] = elem;
          }
          else {
            //console.log('Unread:', index);
            tmpUnreadArr[ tmpUnreadArr.length ] = elem;
          }
        });
        console.warn( 'Separated messages into Read and Unread arrays' );
        console.log('tmpReadArr:', tmpReadArr);
        console.log('tmpUnreadArr:', tmpUnreadArr);
        console.log('-----');

        // SORT ARRAYS BY DATE
        tmpReadArr = tmpReadArr.sort(sortByCreatedDate).reverse();
        tmpUnreadArr = tmpUnreadArr.sort(sortByCreatedDate).reverse();
        console.warn( 'Sorted Read and Unread arrays by date' );
        console.log('sorted tmpReadArr:', tmpReadArr);
        console.log('sorted tmpUnreadArr:', tmpUnreadArr);
        console.log('-----');

        // COMBINE ARRAYS, UNREAD FIRST
        scope.messageList = tmpUnreadArr.concat(tmpReadArr);
        console.log('Combined Read and Unread arrays into $scope.messageList:', scope.messageList);
        console.log('-----');
      }

      /**
       * Sort by Created Date
       *
       * @param {String} a - First string to compare
       * @param {String} b -
       * @returns {number}
       */
      function sortByCreatedDate(a, b) {
        var nameA = a.Created.toUpperCase(); // ignore upper and lowercase
        var nameB = b.Created.toUpperCase(); // ignore upper and lowercase
        if ( nameA<nameB ) return -1;
        if ( nameA>nameB ) return 1;
        // names must be equal
        return 0;
      }

      /**
       * private method for UTF-8 encoding
       *
       * @param string
       * @returns {string}
       * @private
       */
      function _utf8_encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for ( var n = 0; n<string.length; n++ ) {

          var c = string.charCodeAt(n);

          if ( c<128 ) {
            utftext += String.fromCharCode(c);
          }
          else if ( (c>127) && (c<2048) ) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
          }
          else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
          }

        }

        return utftext;
      }

      /**
       * private method for UTF-8 decoding
       *
       * @param utftext
       * @returns {string}
       * @private
       */
      function _utf8_decode(utftext) {
        var string = "";
        var i = 0;
        var c = 0, c1 = 0, c2 = 0, c3;

        while ( i<utftext.length ) {

          c = utftext.charCodeAt(i);

          if ( c<128 ) {
            string += String.fromCharCode(c);
            i++;
          }
          else if ( (c>191) && (c<224) ) {
            c2 = utftext.charCodeAt(i + 1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
          }
          else {
            c2 = utftext.charCodeAt(i + 1);
            c3 = utftext.charCodeAt(i + 2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
          }

        }
        return string;
      }

    }
  ])