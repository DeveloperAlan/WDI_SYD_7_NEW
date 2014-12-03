class MixtapeSongs < ActiveRecord::Base
  belongs_to :mixtape
  belongs_to :song
end
