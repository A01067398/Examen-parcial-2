<?php

	class PerfilConexion{

		private $usr = "rootPetz";
		private $pss = "rootPetz2021**";
		private $servName = "localhost";
		private $DBName = "petz";

		public function getUser(){
			return $this->usr;
		}

		public function getPass(){
			return $this->pss;
		}

		public function getServerName(){
			return $this->servName;
		}

		public function getDataBaseName(){
			return $this->DBName;
		}

	}

?>