describe RPSGame do 
  it 'has two players' do 
    game = RPSGame.new('Jack', 'Lenny')
    expect(game.player_one).to equal('Jack')
    expect(game.player_two).to equal('Lenny')
  end

  it 'player can choose a object' do
    game = RPSGame.new('Jack', 'Lenny')
    game.choose_object(:rock, :player_one)
    game.choose_object(:paper, :player_two)
    expect(game.object_for(:player_one)).to equal(:rock)
    expect(game.object_for(:player_two)).to equal(:paper)
  end
end