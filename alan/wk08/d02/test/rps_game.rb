class RPSGame
  attr_reader :player_one, :player_two 

  def initialize(player_one, player_two)
    @player_one, @player_two = player_one, player_two
  end