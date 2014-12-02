word = "listen"
list_of_words = ['enlists', 'google', 'inlets', 'banana']

list_of_words.each do |l|
  if l.chars.sort == word.chars.sort
      puts l
    end

end