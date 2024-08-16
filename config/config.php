<?php

namespace Config;

class Database{

    private $pdo;
    private $dbHost = "localhost";
    private $dbUsername = "root";
    private $dbPassword = "";
    private $dbName = "todo";

    public function __construct()
    {
        try {
            $dsn = "mysql:host={$this->dbHost};dbname={$this->dbName};charset=utf8";
            $this->pdo = new \PDO($dsn, $this->dbUsername, $this->dbPassword);
            $this->pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        } catch (\PDOException $e) {
            echo 'Connection failed: ' . $e->getMessage();
        }

    }

      // Method to execute a query
      public function query($sql, $params = []) {
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        return $stmt;
    }

    // Method to fetch a single record
    public function fetch($sql, $params = []) {
        $stmt = $this->query($sql, $params);
        return $stmt->fetch(\PDO::FETCH_ASSOC);
    }

    // Method to fetch multiple records
    public function fetchAll($sql, $params = []) {
        $stmt = $this->query($sql, $params);
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    // Method to get the last inserted ID
    public function lastInsertId() {
        return $this->pdo->lastInsertId();
    }

   
}