class CardsController < ApplicationController
    def index
        cards = Card.all
        render json: cards
      end
    
      def create
        new_card = Card.create(card_params)
        render json: new_card
      end

      def delete 
        card = Card.find(params[:id])
        card.destroy
        flash[:notice] = 'Card Deleted'
        render json: card
      end
    
      private
    
      def card_params
        params.require(:card).permit(:title)
      end
end
