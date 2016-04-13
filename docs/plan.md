
open noted application

file
  create a new journal, just a directory to store all notes
  open a journal, point to a directory

manage journals..
  edit journal
    change name
    change location
  backup journal, compress and put somewhere

note
  create note
  edit note

search..
this is the most important function
it should be really easy to search for content..
how does gun db work? what are we storing and how do we retrieve it?
everything is tagged

highlight text
becomes a new note, embedded within note
need to store location 

categories to consider:
judgements
to do

tags are nodes
notes are nodes
notes can be embedded in other notes.. how?

[NOTE]---[CONTAINS]--->[note]
location is a property on CONTAINS relationship
can we do this with gun?

how do you write notes?
normal text, with the following editor tools:
  bold
  italic
  heading 1,2,3, etc
  list 
    unordered
    ordered
  basically all the markdown features, or at least a subset of them. can start with the above.
  highlight text..
    delete whitespace (could be useful for when pasting text from pdfs, web etc..)
    convert paragraphs to list (ordered/unordered)
    create a new note
    mark (separate function to create a new note)

  insert
    another note (should be able to find it easily in dialogue)

highlighting
this becomes a new node.. should save the fact that the text has been highlighted
  should be able to list all the highlighted sections of a document
  should be able to export highlighted sections..
  maybe these should be saved as marked?
  should have option of viewing parent or children marks..
    enable/disable marking from child..
  should be able to list marks..
  colour marks?

inkspace design the ui..

does the app need a separate database, i think so.. explore options: indexdb, gundb again, local storage or maybe simple text files?

how are locations within text files specified?
how do you deal with line endings in different os?

visualise notes..
latest created note is centred
shows relationships 2 depth.. can amend?
choose tag
  shows 1 depth 


NOTEs

properties
  title (should be normalised to lower case and underscore and limit length)
  date created
  date modified

relationships
  NOTE ---> HAS: type=tag ---> TAG
  NOTE ---> HAS: type=mark, location_within_note (line, char) ---> MARK
  NOTE ---> HAS: type=link location_within_note (line, char) ---> LINK
  NOTE ---> CONTAINS: location_within_note (line, char) ---> NOTE
  NOTE ---> RELATED_TO: reason ---> NOTE should give a reason why something is related (can be cyclical)

what if you want to refer to another note, without inserting it/containing it?
this is a link. you should be able to link to any note

what happens to the location of children if you edit text in a parent?

TAGs
properties
  colour - should be able to choose any colour with a colour picker

relationships
  TAG ---> CONTAINS ---> TAG (so that you can group hierarchy - should avoid cyclical references)
  TAG ---> RELATED_TO: reason ---> TAG same as for notes, should give a reason and can be cyclical
  TAG <--- HAS <--- NOTE

MARKs
properties
  colour

relationships
  MARK <--- HAS <--- NOTE

cyclical references:
 a parent note should not be contained within a child note

LINKs
properties
  text: "link to google",
  points_to: "note://my_great_note" (could be a web link, need to open default browser, nicer than using built-in browser i think)

relationships
  LINK <--- HAS <--- NOTE


what does the app database store:
location of all journals
current state..

encryption, should be password protected/encrypted?