// var express=require('express');
// var router=express.Router;
//
// router.get('/',function (req,res){
//     res.send({greeting:'Hello React X Node.js'});
//
// });
// module.exports=router;

const convert = require('xml-js');
var request = require('request');

var url = 'http://openapi.airport.co.kr/service/rest/serviceLine/serviceLines';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=TvtbSU2DKDEnuybGzrgc1uAJGngHEwb%2F0JgeGITs2fMORxT4mP5aizWjV6ifsMkLW9W1gtXT1ns%2Br0eyeiyExQ%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('schStDate') + '=' + encodeURIComponent('20200801'); /* */
queryParams += '&' + encodeURIComponent('schEdDate') + '=' + encodeURIComponent('20200804'); /* */
queryParams += '&' + encodeURIComponent('schLineType') + '=' + encodeURIComponent('I'); /* */
// queryParams += '&' + encodeURIComponent('schAirport') + '=' + encodeURIComponent('GMP'); /* */
queryParams += '&' + encodeURIComponent('serviceKey') + '=' + encodeURIComponent(''); /* */
queryParams +='&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    // console.log('Status', response.statusCode);
    // console.log('Headers', JSON.stringify(response.headers));
    // //body:xml부분
    // console.log('Reponse received', body);
    var result = body
    console.log(`body data => ${result}`)
    var xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});
    console.log(`xml to json=> ${xmlToJson}`)

});