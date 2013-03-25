/**
 * Fires new Event to owner View (needs to be defined in Owner)
 * @event activeItemChanged
 * - component
 * - newCard
 * - oldCard
 */
Ext.define('JT.override.layout.container.Card', {
    override: 'Ext.layout.container.Card',



    setActiveItem: function(newCard, animateDirection) {
        var me = this,
            owner = me.owner,
            oldCard = me.activeItem,
            rendered = owner.rendered,
            newIndex;

        newCard = me.parseActiveItem(newCard);
        newIndex = owner.items.indexOf(newCard);

        // If the card is not a child of the owner, then add it.
        // Without doing a layout!
        if (newIndex == -1) {
            newIndex = owner.items.items.length;
            Ext.suspendLayouts();
            newCard = owner.add(newCard);
            Ext.resumeLayouts();
        }

        // Is this a valid, different card?
        if (newCard && oldCard != newCard) {
            // Fire the beforeactivate and beforedeactivate events on the cards
            if (newCard.fireEvent('beforeactivate', newCard, oldCard) === false) {
                return false;
            }
            if (oldCard && oldCard.fireEvent('beforedeactivate', oldCard, newCard) === false) {
                return false;
            }

            if (rendered) {
                Ext.suspendLayouts();

                // If the card has not been rendered yet, now is the time to do so.
                if (!newCard.rendered) {
                    me.renderItem(newCard, me.getRenderTarget(), owner.items.length);
                }



                if (oldCard) {
                    if (me.hideInactive) {
                        var left = 0;
                        if(animateDirection == "left") {  left = -(Ext.getBody().getWidth());  }
                        else if(animateDirection == "right") {  left = Ext.getBody().getWidth();  }
                        oldCard.getEl().setLeft(left);
                        oldCard.getEl().animate({
                            from:{
                                left:0
                            },
                            to:{
                                left:left
                            },
                            duration:250,
                            listeners:{
                                afteranimate:function(){
                                    oldCard.hide();
                                    oldCard.hiddenByLayout = true;

                                    // Make sure the new card is shown
                                    if (newCard.hidden) {
                                        newCard.show(true);
                                    }

                                    // Layout needs activeItem to be correct, so set it if the show has not been vetoed
                                    if (!newCard.hidden) {
                                        me.activeItem = newCard;
                                    }
                                    Ext.resumeLayouts(true);
                                }
                            }
                        });

                    }
                    oldCard.fireEvent('deactivate', oldCard, newCard);
                }

            } else {
                me.activeItem = newCard;
            }

            newCard.fireEvent('activate', newCard, oldCard);

            owner.fireEvent('activeItemChanged',owner,newCard, oldCard);

            return me.activeItem;
        }
        return false;
    }





});