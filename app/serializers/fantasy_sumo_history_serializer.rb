# we are bypassing this serializer in the FantasySumoHistories controller now
# because AMS serializers are static and expect predefined attributes
# and we need dynamic filtering to only return non-null basho columns
# which is better to do in the controller than the serializer because
# if we filtered here, we would still be fetching all of the null columns
# and only filtering them once we hit this serializer

class FantasySumoHistorySerializer < ActiveModel::Serializer
  attributes :b195801, :b195803, :b195805, :b195807, :b195809, :b195811, :b195901, :b195903, :b195905, :b195907, :b195909, :b195911, :b196001, :b196003, :b196005, :b196007, :b196009, :b196011, :b196101, :b196103, :b196105, :b196107, :b196109, :b196111, :b196201, :b196203, :b196205, :b196207, :b196209, :b196211, :b196301, :b196303, :b196305, :b196307, :b196309, :b196311, :b196401, :b196403, :b196405, :b196407, :b196409, :b196411, :b196501, :b196503, :b196505, :b196507, :b196509, :b196511, :b196601, :b196603, :b196605, :b196607, :b196609, :b196611, :b196701, :b196703, :b196705, :b196707, :b196709, :b196711, :b196801, :b196803, :b196805, :b196807, :b196809, :b196811, :b196901, :b196903, :b196905, :b196907, :b196909, :b196911, :b197001, :b197003, :b197005, :b197007, :b197009, :b197011, :b197101, :b197103, :b197105, :b197107, :b197109, :b197111, :b197201, :b197203, :b197205, :b197207, :b197209, :b197211, :b197301, :b197303, :b197305, :b197307, :b197309, :b197311, :b197401, :b197403, :b197405, :b197407, :b197409, :b197411, :b197501, :b197503, :b197505, :b197507, :b197509, :b197511, :b197601, :b197603, :b197605, :b197607, :b197609, :b197611, :b197701, :b197703, :b197705, :b197707, :b197709, :b197711, :b197801, :b197803, :b197805, :b197807, :b197809, :b197811, :b197901, :b197903, :b197905, :b197907, :b197909, :b197911, :b198001, :b198003, :b198005, :b198007, :b198009, :b198011, :b198101, :b198103, :b198105, :b198107, :b198109, :b198111, :b198201, :b198203, :b198205, :b198207, :b198209, :b198211, :b198301, :b198303, :b198305, :b198307, :b198309, :b198311, :b198401, :b198403, :b198405, :b198407, :b198409, :b198411, :b198501, :b198503, :b198505, :b198507, :b198509, :b198511, :b198601, :b198603, :b198605, :b198607, :b198609, :b198611, :b198701, :b198703, :b198705, :b198707, :b198709, :b198711, :b198801, :b198803, :b198805, :b198807, :b198809, :b198811, :b198901, :b198903, :b198905, :b198907, :b198909, :b198911, :b199001, :b199003, :b199005, :b199007, :b199009, :b199011, :b199101, :b199103, :b199105, :b199107, :b199109, :b199111, :b199201, :b199203, :b199205, :b199207, :b199209, :b199211, :b199301, :b199303, :b199305, :b199307, :b199309, :b199311, :b199401, :b199403, :b199405, :b199407, :b199409, :b199411, :b199501, :b199503, :b199505, :b199507, :b199509, :b199511, :b199601, :b199603, :b199605, :b199607, :b199609, :b199611, :b199701, :b199703, :b199705, :b199707, :b199709, :b199711, :b199801, :b199803, :b199805, :b199807, :b199809, :b199811, :b199901, :b199903, :b199905, :b199907, :b199909, :b199911, :b200001, :b200003, :b200005, :b200007, :b200009, :b200011, :b200101, :b200103, :b200105, :b200107, :b200109, :b200111, :b200201, :b200203, :b200205, :b200207, :b200209, :b200211, :b200301, :b200303, :b200305, :b200307, :b200309, :b200311, :b200401, :b200403, :b200405, :b200407, :b200409, :b200411, :b200501, :b200503, :b200505, :b200507, :b200509, :b200511, :b200601, :b200603, :b200605, :b200607, :b200609, :b200611, :b200701, :b200703, :b200705, :b200707, :b200709, :b200711, :b200801, :b200803, :b200805, :b200807, :b200809, :b200811, :b200901, :b200903, :b200905, :b200907, :b200909, :b200911, :b201001, :b201003, :b201005, :b201007, :b201009, :b201011, :b201101, :b201105, :b201107, :b201109, :b201111, :b201201, :b201203, :b201205, :b201207, :b201209, :b201211, :b201301, :b201303, :b201305, :b201307, :b201309, :b201311, :b201401, :b201403, :b201405, :b201407, :b201409, :b201411, :b201501, :b201503, :b201505, :b201507, :b201509, :b201511, :b201601, :b201603, :b201605, :b201607, :b201609, :b201611, :b201701, :b201703, :b201705, :b201707, :b201709, :b201711, :b201801, :b201803, :b201805, :b201807, :b201809, :b201811, :b201901, :b201903, :b201905, :b201907, :b201909, :b201911, :b202001, :b202003, :b202007, :b202009, :b202011, :b202101, :b202103, :b202105, :b202107, :b202109, :b202111, :b202201, :b202203, :b202205, :b202207, :b202209, :b202211, :b202301, :b202303, :b202305, :b202307, :b202309, :b202311, :b202401, :b202403, :b202405, :b202407, :b202409, :b202411, :b202501, :b202503, :b202505, :b202507, :b202509, :b202511, :avg_fantasy_sumo_score, :total_points

  belongs_to :rikishi, serializer: FantasySumoHistoryRikishiSerializer
end
