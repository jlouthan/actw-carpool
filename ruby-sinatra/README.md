# actw-carpool

Minimal implementation written in [Ruby](https://www.ruby-lang.org/) and [Sinatra](http://www.sinatrarb.com/)

## Get the app up and running

You will need to have ruby and its package manager [RubyGems](https://rubygems.org/) installed.  You will also need to install [MongoDB](https://www.mongodb.org/).

```shell
# ensure that ruby is installed
$ ruby -v

# ensure that gem is installed
$ gem -v

# install bundler gem, which will install dependencies
$ gem install bundler
$ bundler -v

# cd into this project's directory
$ cd actw-carpool/ruby-sinatra

# install dependencies
$ bundle

# run the app!
$ ruby app.rb

(also make sure that MongoDB is running, eg. by running `mongod`)
```

Now you can follow along with the following steps ...

 - [Hello World Sinatra web app](https://github.com/remi/actw-carpool/commit/b64b6c85540bed206f295130d3dc7a211f57a5c0)
 - [Now render a template (using ERB)](https://github.com/remi/actw-carpool/commit/3d63aaf08d06339193133949985fa4314dedc65e)
 - [Now serve a static file, eg. CSS](https://github.com/remi/actw-carpool/commit/0de85a931ce5d6b157306ee0a29d6d9e437d6c15)
 - [Now create a MongoDB "Posting" model and show listing and creating postings](https://github.com/remi/actw-carpool/commit/29d0f683f0b9974c0a27e2751f218edae055cca6)
