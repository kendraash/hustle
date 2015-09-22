import Ember from 'ember';

$(document).ready(function() {
  var t = setInterval(function() {
    $("#carousel ul").animate({marginLeft:-480}, 1000, function() {
      $(this).find("li:last").after($(this).find("li:first"));
      $(this).css({marginLeft:0});
    })
  }, 5000);
})
export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  }
});
