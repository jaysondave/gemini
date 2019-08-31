module ApplicationHelper
  def gen_random_string(length = 7)
    ([*('A'..'Z'),*('0'..'9')]-%w(0 1 I O)).sample(8).join
  end
end
