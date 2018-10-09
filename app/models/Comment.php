
<?php

class Comment
{
  public $id;
  public $comment;


  public function __construct($row) {
    $this->id = isset($row['id']) ? intval($row['id']) : null;

    $this->comment = ($row['comment']);

  }

  public static function fetchAll() {
  // 1. Connect to the database
  $db = new PDO(DB_SERVER, DB_USER, DB_PW);
  // 2. Prepare the query
  $sql = 'SELECT * FROM Comment';
  $statement = $db->prepare($sql);
  // 3. Run the query
  $success = $statement->execute();
  // 4. Handle the results
  $arr = [];
  while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
    $comment =  new Comment($row);
    array_push($arr, $theTeam);
  }
  return $arr;
}
}
public function create() {
   $db = new PDO(DB_SERVER, DB_USER, DB_PW);
   $sql = 'INSERT INTO Work (team_id, task_id, start_date, hours, completion_estimate)
           VALUES (?,?,?,?,?)';
   $statement = $db->prepare($sql);
   $success = $statement->execute([
     $this->team_id,
     $this->task_id,
     $this->start,
     $this->hours,
     $this->completion_estimate
   ]);
   $this->id = $db->lastInsertId();
 }
 public static function getWorkByTaskId(int $taskId) {
   // 1. Connect to the database
   $db = new PDO(DB_SERVER, DB_USER, DB_PW);
   // 2. Prepare the query
   $sql = 'SELECT * FROM Work WHERE task_id = ?';
   $statement = $db->prepare($sql);
   // 3. Run the query
   $success = $statement->execute(
       [$taskId]
   );
   // 4. Handle the results
   $arr = [];
   while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
     // 4.a. For each row, make a new work object
     $workItem =  new Work($row);
     array_push($arr, $workItem);
   }
   return $arr;
 }
}
