class ItemsController < ApplicationController

  def index
    @items = Item.where(checklist_id: params[:id])
    if @items
      render json: @items, status: 200
    end
  end

  def show
    @item = Item.find(params[:id])
    render json: @item
  end

  def create
    @checklist = Checklist.find(params[:checklist_id])
    @item = @checklist.items.build(item_params)
    if @item.save
      render json: @item,  status: 200
    else
      render status: 400
    end
  end

  def destroy
    @checklist = Checklist.find(params[:checklist_id])
    @checklist.items.where(id: params[:itemIds]).destroy_all
    # another way of saying render status 200
    head 200
  end

  private

  def item_params
    params.require(:item).permit(:task, :checklist_id)
  end

end
