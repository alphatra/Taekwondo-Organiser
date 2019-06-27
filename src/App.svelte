<script>
  import '@fortawesome/fontawesome-free/css/all.css';
  import LogIn from './LogIn.svelte'
	let site;

</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.5/css/uikit.min.css">
	<div class="login uk-cover-container uk-background-secondary uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-overflow-hidden uk-light" data-uk-height-viewport>
		<!-- overlay -->
		<div class="uk-position-cover uk-overlay-primary"></div>
		<!-- /overlay -->
		<div class="uk-position-bottom-center uk-position-small uk-visible@m uk-position-z-index">
			<span class="uk-text-small uk-text-muted">© 2019 Taekwon-do Organiser - <a href="https://github.com/zzseba78/Kick-Off">Created by Alpphatra</a>
		</div>
		<div class="uk-width-medium uk-padding-small uk-position-z-index" uk-scrollspy="cls: uk-animation-fade">
			
			<div class="uk-text-center uk-margin">
				<h3>Taekwon-do <span style="color:cornflowerblue;">Organiser</span></h3>
			</div>

			<!-- login -->
			<form class="toggle-class" action="login-dark.html">
				<fieldset class="uk-fieldset">
					<div class="uk-margin-small">
						<div class="uk-inline uk-width-1-1">
							<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
							<input class="uk-input uk-border-pill" placeholder="Username" type="text">
						</div>
					</div>
					<div class="uk-margin-small">
						<div class="uk-inline uk-width-1-1">
							<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
							<input class="uk-input uk-border-pill" placeholder="Password" type="password">
						</div>
					</div>
					<div class="uk-margin-small">
						<label><input class="uk-checkbox" type="checkbox"> Keep me logged in</label>
					</div>
					<div class="uk-margin-bottom">
					<LogIn />
					</div>
				</fieldset>
			</form>
			<!-- /login -->

			<!-- recover password -->
			<form class="toggle-class" action="login-dark.html" hidden>
				<div class="uk-margin-small">
					<div class="uk-inline uk-width-1-1">
						<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: mail"></span>
						<input class="uk-input uk-border-pill" placeholder="E-mail" required type="text">
					</div>
				</div>
				<div class="uk-margin-bottom">
					<button type="submit" class="uk-button uk-button-primary uk-border-pill uk-width-1-1">SEND PASSWORD</button>
				</div>
			</form>
			<!-- /recover password -->
			
			<!-- action buttons -->
			<div>
				<div class="uk-text-center">
					<a class="uk-link-reset uk-text-small toggle-class" data-uk-toggle="target: .toggle-class ;animation: uk-animation-fade">Forgot your password?</a>
					<a class="uk-link-reset uk-text-small toggle-class" data-uk-toggle="target: .toggle-class ;animation: uk-animation-fade" hidden><span data-uk-icon="arrow-left"></span> Back to Login</a>
				</div>
			</div>
			<!-- action buttons -->
		</div>
		
		<!-- JS FILES -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.5/js/uikit.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.5/js/uikit-icons.min.js"></script>
	</div>

