class ItemsController < ApplicationController

  def index
    @items = Item.all
    if @items
      render json: @items, status: 200
    end
  end

  def show
    @item = Item.find(params[:id])
    render json: @item
  end

  def create
    @item = Item.new(item_params)
    @item.checklist_id = params[:id]
    if @item.save
      render json: @item,  status: 200
    else
      render status: 400
    end
  end

    # item = Item.new(item_params)
    # if item.save
    #   render json: { success: item, status: "success"}
    # else
    #   render json: { errors: item.errors.full_messages,
    #                  status: "error" }
    # end

  def update
    @item = @Item.find(params[:id])
    if @item.save(item_params)
      render json: { success: @item, status: "success"}
    else
      render json: { errors: @item.errors.full_messages,
                    status: "error" }
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
  end

  private

  def item_params
    params.require(:item).permit(:task, :checklist_id)
  end

end
