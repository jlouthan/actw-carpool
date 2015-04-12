require "sinatra"
require "erb"

get "/" do
  @message_to_display = "Hello World"
  erb :index
end
