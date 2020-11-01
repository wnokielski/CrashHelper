package org.nokwoj.crashhelper.models;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;

public class MyUserDetails implements UserDetails {

    private String email;
    private String password;
    private Account account;

    private SimpleGrantedAuthority authority;

    public MyUserDetails(Account account){
        this.email = account.getEmail();
        this.password = account.getPassword();
        this.account = account;
        this.authority = new SimpleGrantedAuthority(account.getRole());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Arrays.asList(authority);
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public Account getAccount(){
        return account;
    }

    public void setAccount (Account account){
        this.account = account;
    }
}
