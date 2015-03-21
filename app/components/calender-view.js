import Ember from 'ember';
import layout from '../templates/components/calender-view';

export default Ember.Component.extend({
  layout: layout,
  didInsertElement(){
    console.log(this.$('.collapsible'));
    this.$('.collapsible').collapsible({
      accordian: true 
    });
  }
});
