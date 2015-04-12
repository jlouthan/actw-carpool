require "sinatra"
require "erb"

require_relative "posting"

get "/" do
  @postings = Posting.all
  erb :index
end

post "/postings" do
  Posting.create params
  redirect "/"
end
