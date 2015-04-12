require "mongoid"

Mongoid.load! "mongoid.yml", :development

class Posting
  include Mongoid::Document

  field :first_name
  field :last_name
  field :email
  field :type
  field :day
  field :time
end
