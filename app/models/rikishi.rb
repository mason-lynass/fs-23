class Rikishi < ApplicationRecord
    def avg_fs_score
        not_nil = self.FS_history.select {|r| r != nil}
        if not_nil.length == 0
            return nil
        else return (not_nil.sum(0.00) / not_nil.size).round(2)
        end
    end
end
