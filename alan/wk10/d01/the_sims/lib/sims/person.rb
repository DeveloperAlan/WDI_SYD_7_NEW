module Sims
  class Person

    attr_reader :location

    def initialize
      @location = 0
    end

    def walk(distance)
      @location += distance
    end
  end
end