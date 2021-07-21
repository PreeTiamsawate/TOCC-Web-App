<?php
$host = 'localhost';
$db = 'testdb';
$user = 'root';
$password = '';

$dsn = "mysql:host=$host;dbname=$db;charset=UTF8";

$result = array();
try {
	$pdo = new PDO($dsn, $user, $password);
	if ($pdo) {
		//echo "Connected to the $db database successfully!";
        $sql = "SELECT * FROM contact WHERE contact_id=2";
        $statement = $pdo->query($sql);
        $contacts = $statement->fetchAll(PDO::FETCH_ASSOC);
        if ($contacts) {
            foreach ($contacts as $contact) {
                $result['contact_id'] = $contact['contact_id'];
                $result['title'] = $contact['title'];
                $result['tel'] = $contact['tel'];
                $result['dts'] = date('r');
            }
        }
        $jsonMessage = json_encode($result);
    }
} catch (PDOException $e) {
	$result = $e->getMessage();
}
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
echo "retry: 10000\n"; // refresh every 10 seconds
echo "data: ".$jsonMessage."\n\n";
flush();
?>