-- Book 1
insert into authors(author_id, name) values (1, 'Tamsyn Muir');

insert into genres(genre_id, name) values(1, 'Science Fiction');
insert into genres(genre_id, name) values(2, 'Fantasy');
insert into genres(genre_id, name) values(3, 'Religeous+');

insert into books(book_id, isbn13, title, cover, pages, publish_year, publisher, description) 
values (1, '978-1250313195', 'Gideon the Ninth', 'GideonNinth.png', 448, 2019, 'Tardotcom', 
'The Emperor needs necromancers. The Ninth Necromancer needs a swordswoman.
Gideon has a sword, some dirty magazines, and no more time for undead nonsense.
Brought up by unfriendly, ossifying nuns, ancient retainers, and countless skeletons, 
Gideon is ready to abandon a life of servitude and an afterlife as a reanimated corpse. 
She packs up her sword, her shoes, and her dirty magazines, and prepares to launch her daring escape. 
But her childhood nemesis won''t set her free without a service. Harrowhark Nonagesimus, 
Reverend Daughter of the Ninth House and bone witch extraordinaire, has been summoned into action. 
The Emperor has invited the heirs to each of his loyal Houses to a deadly trial of wits and skill. 
If Harrowhark succeeds she will be become an immortal, all-powerful servant of the Resurrection, 
but no necromancer can ascend without their cavalier. Without Gideon''s sword, Harrow will fail, 
and the Ninth House will die. Of course, some things are better left dead.');

insert into category(genre_id, book_id) values (1, 1);
insert into category(genre_id, book_id) values (2, 1);
insert into category(genre_id, book_id) values (3, 1);
insert into credit(author_id, book_id) values (1, 1);

-- Book2
insert into authors(author_id, name) values ( 2, 'Xiran Jay Zhao');
insert into genres(genre_id, name) values( 4, 'Young Adult');

insert into books(book_id, isbn13, title, cover, pages, publish_year, publisher, description) 
values (2, '978-0735269934', 'Iron Widow', 'IronWidow.png', 361, 2021, 'Penguin Teen',
'The boys of Huaxia dream of pairing up with girls to pilot Chrysalises, 
giant transforming robots that can battle the mecha aliens that lurk beyond the Great Wall. 
It doesn''t matter that the girls often die from the mental strain.
 When 18-year-old Zetian offers herself up as a concubine-pilot, it''s to assassinate 
 the ace male pilot responsible for her sister''s death. But she gets her vengeance in a way 
 nobody expected—she kills him through the psychic link between pilots and emerges from the 
 cockpit unscathed. She is labeled an Iron Widow, a much-feared and much-silenced kind of female 
 pilot who can sacrifice boys to power up Chrysalises instead. To tame her unnerving yet invaluable 
 mental strength, she is paired up with Li Shimin, the strongest and most controversial male pilot 
 in Huaxia​. But now that Zetian has had a taste of power, she will not cower so easily. 
 She will miss no opportunity to leverage their combined might and infamy to survive attempt after 
 attempt on her life, until she can figure out exactly why the pilot system works in its misogynist 
 way—and stop more girls from being sacrificed.');

insert into category(genre_id, book_id) values (1,2);
insert into category(genre_id, book_id) values (4,2);
insert into credit(author_id, book_id) values (2,2);

-- Book 3
insert into authors(author_id, name) values ( 3, 'Madeline Miller');
insert into genres(genre_id, name) values( 5, 'Romance');
insert into genres(genre_id, name) values( 6, 'Historical Fiction');

insert into books(book_id, isbn13, title, cover, pages, publish_year, publisher, description) 
values (3, '978-0062060624', 'The Song of Achilles', 'TheSongofAchilles.png', 264, 2011, 'Ecco Press (HarperCollins)',
'Achilles, "the best of all the Greeks," son of the cruel sea goddess Thetis and the 
legendary king Peleus, is strong, swift, and beautiful, irresistible to all who meet him. 
Patroclus is an awkward young prince, exiled from his homeland after an act of shocking violence. 
Brought together by chance, they forge an inseparable bond, despite risking the gods'' wrath.
They are trained by the centaur Chiron in the arts of war and medicine, but when word comes 
that Helen of Sparta has been kidnapped, all the heroes of Greece are called upon to lay siege 
to Troy in her name. Seduced by the promise of a glorious destiny, Achilles joins their cause, 
and torn between love and fear for his friend, Patroclus follows. Little do they know that the 
cruel Fates will test them both as never before and demand a terrible sacrifice.');

insert into category(genre_id, book_id) values (2,3);
insert into category(genre_id, book_id) values (5,3);
insert into category(genre_id, book_id) values (6,3);
insert into credit(author_id, book_id) values (3,3);

-- Book 4
insert into authors(author_id, name) values ( 4, 'R.F. Kuang');
insert into genres(genre_id, name) values( 7, 'Grimdark');

insert into books(book_id, isbn13, title, cover, pages, publish_year, publisher, description) 
values (4, '978-0062662569', 'The Poppy War', 'PoppyWar.png', 651, 2018, 'Harper Voyager',
'When Rin aced the Keju—the Empire-wide test to find the most talented youth to learn at the 
Academies—it was a shock to everyone: to the test officials, who couldn''t believe a war orphan 
from Rooster Province could pass without cheating; to Rin''s guardians, who believed they''d 
finally be able to marry her off and further their criminal enterprise; and to Rin herself, 
who realized she was finally free of the servitude and despair that had made up her daily existence. 
That she got into Sinegard—the most elite military school in Nikan—was even more surprising.
But surprises aren''t always good. Because being a dark-skinned peasant girl from the south 
is not an easy thing at Sinegard. Targeted from the outset by rival classmates for her color, 
poverty, and gender, Rin discovers she possesses a lethal, unearthly power—an aptitude for the 
nearly-mythical art of shamanism. Exploring the depths of her gift with the help of a seemingly 
insane teacher and psychoactive substances, Rin learns that gods long thought dead are very 
much alive—and that mastering control over those powers could mean more than just surviving school.
For while the Nikara Empire is at peace, the Federation of Mugen still lurks across a narrow sea. 
The militarily advanced Federation occupied Nikan for decades after the First Poppy War, and only 
barely lost the continent in the Second. And while most of the people are complacent to go about 
their lives, a few are aware that a Third Poppy War is just a spark away . . .
Rin''s shamanic powers may be the only way to save her people. But as she finds out more about 
the god that has chosen her, the vengeful Phoenix, she fears that winning the war may cost her 
humanity . . . and that it may already be too late.');

insert into category(genre_id, book_id) values (2,4);
insert into category(genre_id, book_id) values (1,4);
insert into category(genre_id, book_id) values (7,4);
insert into credit(author_id, book_id) values (4,4);

-- Book 5
insert into authors(author_id, name) values ( 5, 'Kiersten White');

insert into books(book_id, isbn13, title, cover, pages, publish_year, publisher, description) 
values (5, '978-0525581703', 'The Guinevere Deception', 'Guinevere.png', 354, 2020, 'Ember', 
'Princess Guinevere has come to Camelot to wed a stranger: the charismatic King Arthur. 
With magic clawing at the kingdom''s borders, the great wizard Merlin conjured a solution--
send in Guinevere to be Arthur''s wife . . . and his protector from those who want to see the 
young king''s idyllic city fail. The catch? Guinevere''s real name--and her true identity--
is a secret. She is a changeling, a girl who has given up everything to protect Camelot.
To keep Arthur safe, Guinevere must navigate a court in which the old--including Arthur''s 
own family--demand things continue as they have been, and the new--those drawn by the dream 
of Camelot--fight for a better way to live. And always, in the green hearts of forests and 
the black depths of lakes, magic lies in wait to reclaim the land. Deadly jousts, 
duplicitous knights, and forbidden romances are nothing compared to the greatest threat of all: 
the girl with the long black hair, riding on horseback through the dark woods toward Arthur. 
Because when your whole existence is a lie, how can you trust even yourself?');

insert into category(genre_id, book_id) values (4,5);
insert into credit(author_id, book_id) values (5,5);

-- Book 6
insert into authors(author_id, name) values ( 6, 'S.A. Barnes');

insert into books(book_id, isbn13, title, cover, pages, publish_year, publisher, description) 
values (6, '978-1250819994', 'Dead Silence', 'DeadSilence.png', 288, 2022, 'Tor Nightfire',
'Claire Kovalik is days away from being unemployed―made obsolete―when her beacon repair 
crew picks up a strange distress signal. With nothing to lose and no desire to return to Earth, 
Claire and her team decide to investigate. What they find is shocking: the Aurora, 
a famous luxury spaceliner that vanished on its maiden tour of the solar system more 
than twenty years ago. A salvage claim like this could set Claire and her crew up for life. 
But a quick search of the ship reveals something isn''t right.
Whispers in the dark. Flickers of movement. Messages scrawled in blood. 
Claire must fight to hold on to her sanity and find out what really happened on the Aurora 
before she and her crew meet the same ghastly fate.');

insert into category(genre_id, book_id) values (2,6);
insert into category(genre_id, book_id) values (1,6);
insert into credit(author_id, book_id) values (6,6);

-- Book 7
insert into authors(author_id, name) values ( 7, 'Caitlin Starling');
insert into genres(genre_id, name) values( 8, 'Horror');

insert into books(book_id, isbn13, title, cover, pages, publish_year, publisher, description) 
values (7, '978-0062846907', 'The Luminous Dead', 'LuminousDead.png', 393, 2019, 'Harper Voyager',
'When Gyre Price lied her way into this expedition, she thought she''d be mapping mineral deposits, 
and that her biggest problems would be cave collapses and gear malfunctions. She also thought that 
the fat paycheck—enough to get her off-planet and on the trail of her mother—meant she''d get a 
skilled surface team, monitoring her suit and environment, keeping her safe. Keeping her sane.
Instead, she got Em. Em sees nothing wrong with controlling Gyre''s body with drugs or withholding 
critical information to “ensure the smooth operation” of her expedition. Em knows all about Gyre''s 
falsified credentials, and has no qualms using them as a leash—and a lash. And Em has secrets, too . . .
As Gyre descends, little inconsistencies—missing supplies, unexpected changes in the route, and, 
worst of all, shifts in Em''s motivations—drive her out of her depths. Lost and disoriented, Gyre 
finds her sense of control giving way to paranoia and anger. On her own in this mysterious, deadly 
place, surrounded by darkness and the unknown, Gyre must overcome more than just the dangerous 
terrain and the Tunneler which calls underground its home if she wants to make it out alive—she 
must confront the ghosts in her own head. But how come she can''t shake the feeling she''s 
being followed?');

insert into category(genre_id, book_id) values (2,7);
insert into category(genre_id, book_id) values (1,7);
insert into category(genre_id, book_id) values (8,7);
insert into credit(author_id, book_id) values (7,7);

-- Book 8
insert into authors(author_id, name) values ( 8, 'Carrie Ryan');

insert into books(book_id, isbn13, title, cover, pages, publish_year, publisher, description) 
values (8, '978-0385736824', 'The Forest of Hands and Teeth', 'ForestOfTeeth.png', 322, 2009, 'Random House',
'In Mary''s world there are simple truths.
   The Sisterhood always knows best.
   The Guardians will protect and serve.
   The Unconsecrated will never relent.
   And you must always mind the fence that surrounds the village; the fence that protects the 
   village from the Forest of Hands and Teeth.
   But, slowly, Mary''s truths are failing her. She''s learning things she never wanted to know 
   about the Sisterhood and its secrets, and the Guardians and their power. And, when the fence 
   is breached and her world is thrown into chaos, about the Unconsecrated and their relentlessness.
   Now, she must choose between her village and her future, between the one she loves and the one 
   who loves her. And she must face the truth about the Forest of Hands and Teeth. 
   Could there be life outside a world surrounded in so much death?');

insert into category(genre_id, book_id) values (2,8);
insert into category(genre_id, book_id) values (1,8);
insert into category(genre_id, book_id) values (4,8);
insert into credit(author_id, book_id) values (8,8);

-- Book 9
insert into authors(author_id, name) values ( 9, 'Natalie Haynes');

insert into books(book_id, isbn13, title, cover, pages, publish_year, publisher, description) 
values (9, '978-1509836192', 'A Thousand Ships', 'ThousandShips.png', 364, 2019, 'Mantle',
'In the middle of the night, Creusa wakes to find her beloved Troy engulfed in flames. 
Ten seemingly endless years of brutal conflict between the Greeks and the Trojans are over, 
and the Greeks are victorious. Over the next few hours, the only life she has ever known 
will turn to ash . . . The devastating consequences of the fall of Troy stretch from Mount 
Olympus to Mount Ida, from the citadel of Troy to the distant Greek islands, and across 
oceans and sky in between. These are the stories of the women embroiled in that legendary 
war and its terrible aftermath, as well as the feud and the fatal decisions that started it all. . .');

insert into category(genre_id, book_id) values (6,9);
insert into credit(author_id, book_id) values (9,9);


-- Book 10
insert into authors(author_id, name) values ( , '');
insert into genres(genre_id, name) values( , '');

insert into books(book_id, isbn13, title, cover, pages, publish_year, publisher, description) 
values (7, '', '', '.png', , , '',
'Description for ');

insert into category(genre_id, book_id) values (,);
insert into category(genre_id, book_id) values (,);
insert into category(genre_id, book_id) values (,);
insert into credit(author_id, book_id) values (,);