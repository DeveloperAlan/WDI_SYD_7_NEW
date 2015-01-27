require "sims/person"

module Sims
  describe Person do 
    describe ".walk" do 
      it "changes location" do 
        #GIVEN
        person = Person.new
        #WHEN
        person.walk(4.5)
        person.walk(10)
        #THEN
        expect(person.location). to eq(14.5)
      end
    end
  end
end