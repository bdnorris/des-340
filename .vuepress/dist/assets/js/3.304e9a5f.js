(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{262:function(e,t,n){"use strict";n.r(t);n(227);var a=n(241),s={props:{calId:String},data:function(){return{baseUrl:"https://www.googleapis.com/calendar/v3/calendars/",calKey:"AIzaSyCDDbbwlEYHKgv6JJTLiObQyQRnGkB1nYg",calStart:"",events:[],apiIP:!1,counter:1}},beforeMount:function(){var e=new Date;this.calStart=e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)+"T10%3A00%3A00-07%3A00",this.getEvents()},mounted:function(){console.log("events",this.events)},methods:{getEvents:function(){var e=this;a.get(this.baseUrl+this.calId+"group.calendar.google.com/events?showDeleted=false&key="+this.calKey+"&timeMax=2019-06-30T10%3A00%3A00-07%3A00&timeMin="+this.calStart).then(function(t){console.log("response",t),e.$data.events=t.data.items}).catch(function(e){console.log(e)})},parseDate:function(e){var t=e.substring(5,7),n=e.substring(8,10);return console.log(parseInt(t)),["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(t)-1]+" "+n}}},r=n(19),o=Object(r.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",e._l(e.events,function(t){return n("li",[n("span",[e._v(e._s(e.parseDate(t.start.date)))]),e._v(" "),n("strong",[e._v(e._s(t.summary))])])})),e._v(" "),n("div")])},[],!1,null,null,null);o.options.__file="Calendar.vue";t.default=o.exports}}]);