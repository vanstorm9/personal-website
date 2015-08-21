jQuery(document).ready(function(){
			$('#game_text').autocomplete({source:'autosuggest_game.php', minLength:2});
			$('#music_text').autocomplete({source:'autosuggest_music.php', minLength:2});
			$('#sport_text').autocomplete({source:'autosuggest_sport.php', minLength:2});
			$('#show_text').autocomplete({source:'autosuggest_show.php', minLength:2});
			$('#movie_text').autocomplete({source:'autosuggest_movie.php', minLength:2});
			$('#major_text').autocomplete({source:'autosuggest_major.php', minLength:2});
			$('#country_text').autocomplete({source:'autosuggest_country.php', minLength:2});
			$('#state_text').autocomplete({source:'autosuggest_state.php', minLength:1});
			$('#interest_text_1').autocomplete({source:'autosuggest_interest.php', minLength:2});
			$('#interest_text_2').autocomplete({source:'autosuggest_interest.php', minLength:2});
			$('#interest_text_3').autocomplete({source:'autosuggest_interest.php', minLength:2});
});