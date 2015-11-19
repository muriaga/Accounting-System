<?php 

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;

class Checks extends Model {

	public static function createCheck($data){
		$check = $data['check'];
		$userID = $data['userID'];

		$result = DB::table('tbl_checks')->insert(['Items' => ($check['Items']), 'amount' => ($check['amount']), 'check_date' => ($check['dt']), 'userID' => $userID]);
		if($result){
			$results['success'] = 'true';
			$results['msg'] = 'New record has been added';
		}else{
			$results['success'] = 'false';
			$results['msg'] = 'WARNING: Unknown error occur while saving the record';
		}
		return $results;
	}
}				