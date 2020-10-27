package org.nokwoj.crashhelper.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors(withDefaults())
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/api/workshops").permitAll()
                .antMatchers("/api/register/*").permitAll()
                .antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
                .antMatchers("/*.js","/*.jsx","/*.css").permitAll()
                .anyRequest().authenticated()
                .and().httpBasic(); //wyłączenie czegośtam do testów POST


    }

}
