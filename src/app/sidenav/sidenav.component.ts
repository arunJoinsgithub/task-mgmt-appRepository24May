import { Component, OnDestroy, OnInit } from '@angular/core';
import {
    NavigationStart,
    Router,
    ActivatedRoute,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
    selector: 'sidenav-container',
    styleUrls: ['./sidenav.component.css'],
    templateUrl: './sidenav.component.html'
})

export class SideNavComponent implements OnInit, OnDestroy {

    public routerEvents: Subscription;
    public routerLoading: boolean;
   

    constructor(public router: Router,
                public activatedRoute: ActivatedRoute) {

        this.routerEvents = router.events
            .subscribe((data) => {
                if (data instanceof NavigationStart) {
                    this.routerLoading = true;
                } else if (data instanceof NavigationEnd) {
                    /**
                     * Logout when navigating to root path
                     * Occurs on back button click after login
                     */
                    if (data.urlAfterRedirects === '/') {
                        this.logout();
                    }

                    /**
                     * Current path
                     */
                   // this.appState.set('currentUrl', this.router.url.replace(/^\/|\/$/g, ''));

                    /**
                     * Display current page title
                     */
                    this.getCurrentPageTitle();

                    this.routerLoading = false;
                } else if (data instanceof NavigationCancel) {
                    this.routerLoading = false;
                } else if (data instanceof NavigationError) {
                    this.routerLoading = false;
                }
            });
    }

    public ngOnInit() {
       
    }

    public ngOnDestroy() {
        this.routerEvents.unsubscribe();
       // this.pagesListSubscription.unsubscribe();
    }

    /**
     * Get current page title
     */
    public getCurrentPageTitle() {
      
    }

    public logout(): void {
       // this.appState.reset();
       // this.sessionService.endSession();
        this.router.navigateByUrl('/')
            .catch(err => console.log(err));
    }

}
